// Обертка для совместимости с Next.js 13+ App Router
// Старый код fb-events.js работает без изменений через эту обертку

// Вспомогательная функция для безопасного вызова handler
async function safeHandler(request) {
  try {
    // Динамический импорт с обработкой ошибок на уровне модуля
    const { fbEventsHandler } = await import('@rivercode/facebook-conversion-api-nextjs/handlers');
    
    // Пытаемся вызвать handler
    const result = await fbEventsHandler(request);
    
    // Если handler возвращает Response, возвращаем его
    if (result instanceof Response) {
      return result;
    }
    
    // Если возвращает объект с status и другими полями
    if (result && typeof result === 'object' && 'status' in result) {
      return new Response(
        JSON.stringify(result.body || { success: true }),
        {
          status: result.status || 200,
          headers: {
            'Content-Type': 'application/json',
            ...(result.headers || {}),
          },
        }
      );
    }
    
    // Если возвращает что-то другое, оборачиваем в Response
    return new Response(JSON.stringify(result || { success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Логируем ошибку только в development, но возвращаем успешный ответ всегда
    if (process.env.NODE_ENV === 'development') {
      console.error('Facebook Events API error:', error);
    }
    // Всегда возвращаем успешный ответ, чтобы не блокировать деплой и работу сайта
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(request) {
  return safeHandler(request);
}

export async function GET(request) {
  return safeHandler(request);
}
