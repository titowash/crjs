import * as alt from '@altv/server';

// Функция для отправки сообщения всем игрокам
function sendMessageToAll(message, color) {
    alt.emitAllClients('chat:message', message, color);
}

// Функция для обработки команды /me
function handleMeCommand(player, args) {
    if (args.length === 0) {
        player.send(`Usage: /me [action]`);
        return;
    }

    const action = args.join(' ');
    const message = `* ${player.name} ${action}`;
    const color = '#BE9FD6'; // Заданный цвет текста

    sendMessageToAll(message, color);
}

// Регистрация команды /me
alt.on('command:me', handleMeCommand);

// Логирование для проверки запуска ресурса
alt.log('Commands resource has been loaded.');