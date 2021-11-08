import { StatusCode, ModuleCode } from "./errCode";

export function successResponse(result) {
  const { message, data } = result;
  return { code: 0, message, data: data || '' };
}

export function failResponse(result) {
  const { type, message, name, data } = result;
  return { code: Number(getLocalCode(type, name)), message, data: data || '' };
}

export function getLocalCode(error, name) {
  error ? error : 'UNKNOW_ERR';
  name ? name : 'UnknowService';
  return `${StatusCode[error]}${process.env.serveCode}${ModuleCode[name]}`;
}

export function responseFormat(result) {
  const { type } = result;
  if (type === 'success') {
    return successResponse(result);
  }
  return failResponse(result);
}