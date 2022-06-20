export const successFormater = (data: any) => {
  return { data: data, metadata: ['http://example.com/api/v1/api-docs'] };
};

export const errorFormater = (message: string, ...data: any[]) => {
  return {
    message: message,
    ...data,
    metadata: ['http://example.com/api/v1/api-docs'],
  };
};

const responseFormater = { successFormater, errorFormater };
export default responseFormater;
