const mongoose      = require('mongoose');
const userSchema    = mongoose
.Schema(
    {
        name:       { type: String, required: true  },
        user:       { type: String, required: true  },
        email:      { type: String, required: true  },
        password:   { type: String, required: true  },
        age:        { type: Number, required: false },
    },
    { timestamps : true }
);

module.exports = mongoose.model('User',userSchema);