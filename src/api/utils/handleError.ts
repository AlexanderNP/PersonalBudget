import axios, { AxiosError } from "axios";

enum HttpStatus {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
}

const ErrorMessageUnauthorized = {
  RESOURCE_USER_ALREADY_EXISTS: "Пользователь уже существует!",
  RESOURCE_INVALID_LOGIN_OR_PASSWORD: "Неверный логин или пароль!",
} as const;

export const handleError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<any>;
    switch (axiosError.status) {
      case HttpStatus.BadRequest:
        return "Некорректный запрос. Проверьте введённые данные.";
      case HttpStatus.Unauthorized:
        return handleErrorMessageUnauthorized(axiosError.response?.data?.message);
      case HttpStatus.Forbidden:
        return "Доступ запрещён. У вас недостаточно прав.";
      case HttpStatus.NotFound:
        return "Ресурс не найден. Проверьте URL.";
      case HttpStatus.InternalServerError:
        return "Внутренняя ошибка сервера. Попробуйте позже.";
      default:
        return "Произошла неизвестная ошибка";
    }
  } else {
    return "Произошла неизвестная ошибка";
  }
};

const handleErrorMessageUnauthorized = (errorMessage: keyof typeof ErrorMessageUnauthorized) =>
  ErrorMessageUnauthorized[errorMessage] || "Произошла ошибка авторизации";
