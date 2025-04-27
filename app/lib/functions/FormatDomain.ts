export const FormatDomain = (url: string): string => {
  try {
    // Удаляем протокол и www если они есть
    const domain = url.replace(/^(https?:\/\/)?(www\.)?/, '');
    // Берем только домен (удаляем путь и параметры)
    return domain.split('/')[0];
  } catch (error) {
    console.error('Ошибка при форматировании домена:', error);
    return url;
  }
}; 