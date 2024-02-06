const axios = require('axios');

export const formAxios = axios.create({
    transformRequest: [function (data, headers) {
        if (headers['Content-Type'] && headers['Content-Type'].startsWith('multipart/form-data')) {
            const form = new FormData();
            for (const key in data) {
                const value = data[key];
                if (Array.isArray(value)) {
                    const arrayKey = `${key}[]`;
                    value.forEach(v => {
                        form.append(arrayKey, v);
                    });
                } else {
                    form.append(key, value);
                }
            }
            return form;
        }
        return data;
    }],
});
