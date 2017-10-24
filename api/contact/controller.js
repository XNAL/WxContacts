/*
 * 登录
 */
exports.Login = async(ctx) => {
    let userId = ctx.request.body.userID || '';
    let psd = ctx.request.body.password || '';
    if (!userId || !psd) {
        ctx.body = {
            success: false,
            message: '账号或密码不能为空'
        };
        return false;
    }
    try {
        let result = await ctx.execSql(`select * from contact_user where phone = ? and password = ?`, [userId, psd]);
        if (result.length > 0) {
            ctx.body = {
                success: true,
                message: ''
            };
        } else {
            ctx.body = {
                success: false,
                message: '账号或密码错误'
            };
        }
    } catch (err) {
        ctx.body = {
            success: false,
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
 * 获取我的信息
 */
exports.getContactByPhone = async(ctx) => {
    let userID = ctx.params.userID || '';
    let sql = ` select a.name, a.gender, a.phone, b.name as deptName, b.tel as deptTel, c.name as subject 
                from contact_user a left join contact_dept b on a.deptId = b.id 
                left join contact_subject c on a.subjectId = c.id where a.phone = ?`;
    try {
        let result = await ctx.execSql(sql, userID);
        if(result.length > 0) {
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

