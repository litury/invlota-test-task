export default defineEventHandler(async (event) => {

    // Проверяем, что event.context.params существует и содержит свойство path
    if (event.context.params?.hasOwnProperty("path")) {

        // Указываем тип для переменной path
        const path = event.context.params.path as string;

        // Используем переменную path в запросе к API
        const uri = `https://api.deezer.com/chart/0/${
            path == "tracks" ? "tracks" : path
        }`;

        const data = await $fetch(uri);

        return data;

    } else {
        // Возвращаем ошибку или пустой ответ, если event.context.params не существует или не содержит свойства path
        return {error: "Invalid path parameter"};
    }
});