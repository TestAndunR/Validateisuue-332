module.exports=function(){
    this.name = "Andun"
    this.dbConnections = [];

    this.dbConnections["Test"] = {
             host: process.env.EndPoint_rdsTest,
             port: process.env.Port_rdsTest,
             user: process.env.User_rdsTest,
             password: process.env.Password_rdsTest,
             database: "validation",
        };
    this.dbConnections["IssueValidator"] = {
            host: process.env.EndPoint_rdsIssueValidator,
            port: process.env.Port_rdsIssueValidator,
            user: process.env.User_rdsIssueValidator,
            password: process.env.Password_rdsIssueValidator,
            database: "Validator",
        };
    };