async function invert(avatar) {
    return `https://someapi.xyz/invert?avatar=${avatar}`
};

async function wanted(avatar) {
    return `https://someapi.xyz/wanted?avatar=${avatar}`
};

async function greyscale(avatar) {
    return `https://someapi.xyz/greyscale?avatar=${avatar}`
};

module.exports = {invert, wanted, greyscale}