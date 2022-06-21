export const successFormater = (data: any = {}, ...extend: any[]) => {
  return {
    data: data,
    metadata: ['http://example.com/api/v1/api-docs'],
    ...extend,
  };
};

export const errorFormater = (
  message: string = 'Opps...',
  ...extend: any[]
) => {
  return {
    message: message,
    metadata: ['http://example.com/api/v1/api-docs'],
    ...extend,
  };
};

const responseFormater = { successFormater, errorFormater };
export default responseFormater;
