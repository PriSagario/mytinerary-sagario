const joi = require('joi')

const validator = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().min(3).trim().pattern(new RegExp('[a-zA-Z]')).messages({
            'string.empty': 'this field is required',
            'string.min': 'this field must have more than 3 characters'
        }),
        lastname: joi.string(),
        password: joi.string().required().trim().min(5).messages({
            'string.empty': 'this field is required',
            'string.min': 'this field must have at least 5 characters'
        }),
        email: joi.string().email().required(),
        country: joi.string(),
        photo: joi.string(),
        google: joi.boolean(),
    })
    const validation = schema.validate(req.body, { abortEarly: false })

    if (validation.error) {
        return res.json({ success: false, response: validation.error.details })
    } next()
}

module.exports = validator