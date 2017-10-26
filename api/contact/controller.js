/*
 * 登录
 */
exports.Login = async(ctx) => {
    let phone = ctx.request.body.phone || '';
    let psd = ctx.request.body.password || '';
    if (!phone || !psd) {
        ctx.body = {
            success: false,
            message: '手机号码或密码不能为空'
        };
        return false;
    }
    try {
        let result = await ctx.execSql(`select * from contact_user where phone = ? and password = ?`, [phone, psd]);
        if (result.length > 0) {
            ctx.body = {
                success: true,
                userID: result[0].id,
                message: ''
            };
        } else {
            ctx.body = {
                success: false,
                userID: 0,
                message: '账号或密码错误'
            };
        }
    } catch (err) {
        ctx.body = {
            success: false,
            userID: 0,
            message: err
        };
    }
}

/*
 * 获取部门列表
 */
exports.getDepts = async(ctx) => {
    let sql = ` select a.id, a.name, COUNT(1) as count from contact_dept a 
                inner join contact_user b on b.deptId = a.id
                group by b.deptId`;
    try {
        let result = await ctx.execSql(sql);
        ctx.body = {
            success: true,
            data: result,
            message: ''
        };
    } catch (err) {
        ctx.body = {
            success: false,
            data: [],
            message: err
        };
    }
}


/*
 * 获取学科列表
 */
exports.getSubjects = async(ctx) => {
    let sql = ` select a.id, a.name, COUNT(1) as count from contact_subject a 
                inner join contact_user b on b.subjectId = a.id
                group by b.subjectId`;
    try {
        let result = await ctx.execSql(sql);
        ctx.body = {
            success: true,
            data: result,
            message: ''
        };
    } catch (err) {
        ctx.body = {
            success: false,
            data: [],
            message: err
        };
    }
}

/*
 * 根据部门获取联系人列表
 */
exports.getContactsByDeptID = async(ctx) => {
    let deptID = ctx.params.deptID ? parseInt(ctx.params.deptID) : 0,
        page = ctx.request.query.page ? parseInt(ctx.request.query.page) : 1,
        pageNum = ctx.request.query.pageNum || 20,
        pageIndex = (page - 1) * pageNum;

    let sql = ` select a.id, a.name, a.gender, a.phone, b.name as deptName, b.tel as deptTel from contact_user a left join contact_dept b on a.deptId = b.id 
                where a.deptId = ? limit ?, ?`;
    try {
        let result = await ctx.execSql(sql, [deptID, pageIndex, pageNum]);
        ctx.body = {
            success: true,
            data: result,
            message: ''
        };
    } catch (err) {
        ctx.body = {
            success: false,
            data: [],
            message: err
        };
    }
}


/*
 * 根据学科获取联系人列表
 */
exports.getContactsBySubjectID = async(ctx) => {
    let subjectID = ctx.params.subjectID ? parseInt(ctx.params.subjectID) : 0,
        page = ctx.request.query.page ? parseInt(ctx.request.query.page) : 1,
        pageNum = ctx.request.query.pageNum || 20,
        pageIndex = (page - 1) * pageNum;

    let sql = ` select a.id, a.name, a.gender, a.phone, b.name as subject from contact_user a left join contact_subject b on a.subjectId = b.id 
                where a.subjectId = ? limit ?, ?`;
    try {
        let result = await ctx.execSql(sql, [subjectID, pageIndex, pageNum]);
        ctx.body = {
            success: true,
            data: result,
            message: ''
        };
    } catch (err) {
        ctx.body = {
            success: false,
            data: [],
            message: err
        };
    }
}

/*
 * 根据关键字搜索
 */
exports.searchByKeyword = async(ctx) => {
    let keyword = ctx.params.keyword || '',
        page = ctx.request.query.page ? parseInt(ctx.request.query.page) : 1,
        pageNum = ctx.request.query.pageNum || 20,
        pageIndex = (page - 1) * pageNum,
        sql = ` select a.name, a.gender, a.phone, b.name as deptName, b.tel as deptTel, c.name as subject 
                from contact_user a left join contact_dept b on a.deptId = b.id left join contact_subject c 
                on a.subjectId = c.id where a.name like '%${keyword}%' or a.phone like '%${keyword}%' 
                or b.name like '%${keyword}%' or b.tel like '%${keyword}%' or c.name like '%${keyword}%' limit ?, ?`;
    try {
        console.log('sql', sql);
        let result = await ctx.execSql(sql, [pageIndex, pageNum]);
        ctx.body = {
            success: true,
            data: result,
            message: ''
        };
    } catch (err) {
        ctx.body = {
            success: false,
            data: [],
            message: err
        };
    }
}

/*
 * 获取我的信息
 */
exports.getContactByID = async(ctx) => {
    let userID = ctx.params.userID || 0;
    let sql = ` select a.name, a.gender, a.phone, b.name as deptName, b.tel as deptTel, c.name as subject 
                from contact_user a left join contact_dept b on a.deptId = b.id 
                left join contact_subject c on a.subjectId = c.id where a.id = ?`;
    try {
        let result = await ctx.execSql(sql, userID);
        if (result.length > 0) {
            ctx.body = {
                success: true,
                data: result[0],
                message: ''
            };
        } else {
            ctx.body = {
                success: true,
                data: null,
                message: ''
            };
        }
    } catch (err) {
        ctx.body = {
            success: false,
            data: null,
            message: err
        };
    }
}

/*
 * 编辑我的信息
 */
exports.getContactWhenUpdate = async(ctx) => {
    let userID = ctx.params.userID || 0;
    let sql = ` select a.name, a.gender, a.phone, b.id as deptId,b.name as deptName, 
                b.tel as deptTel, c.id as subjectId, c.name as subject 
                from contact_user a left join contact_dept b on a.deptId = b.id 
                left join contact_subject c on a.subjectId = c.id where a.id = ?`;
    try {
        let result = await ctx.execSql(sql, userID);
        let deptResult = await ctx.execSql('select id, name from contact_dept');
        let subjectResult = await ctx.execSql('select id, name from contact_subject');
        if (result.length > 0) {
            ctx.body = {
                success: true,
                data: result[0],
                depts: deptResult || [],
                subjects: subjectResult || [],
                message: ''
            };
        } else {
            ctx.body = {
                success: true,
                data: null,
                depts: [],
                subjects: [],
                message: ''
            };
        }
    } catch (err) {
        ctx.body = {
            success: false,
            data: null,
            depts: [],
            subjects: [],
            message: err
        };
    }
}


/*
 * 更新我的信息
 */
exports.updateContact = async(ctx) => {
    let userID = ctx.params.userID || 0,
        data = {
            name: ctx.request.body.name,
            gender: ctx.request.body.gender || 1,
            phone: ctx.request.body.phone,
            deptID: ctx.request.body.deptID || 0,
            subjectID: ctx.request.body.subjectID || 0
        };
    try {
        let result = await ctx.execSql('update contact_user set ? where id = ?', [data, userID]);
        ctx.body = {
            success: true,
            message: ''
        };
    } catch (err) {
        ctx.body = {
            success: false,
            message: err
        };
    }
}