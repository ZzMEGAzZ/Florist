const generatePayload = require('promptpay-qr');

export const qrPayment = async (total: number): Promise<string> => {
    const mobileNumber: string = '061-706-2929';
    const payload: string = generatePayload(mobileNumber, { amount: total });
    return payload;
};
