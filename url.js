//module.exports = `mongodb+srv://admin:admin@cluster0.vuq1vfq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const dbUsername = process.env.dbUsername;
const dbPassword = process.env.dbPassword;
let url = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.vuq1vfq.mongodb.net/`;
