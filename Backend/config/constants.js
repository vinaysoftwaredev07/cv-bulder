
module.exports = {
    REGEXP: {
        TEXT: /[\\s\\S]*/,
        NAME: /^[a-zA-Z ]+$/,
        EMAIL: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        PHONE: /^\d{10}$/
    },
    KEYS: ['data', 'employment', 'education', 'project']
}