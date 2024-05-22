import * as alt from 'alt-client';
import * as game from 'natives';

// Обработка события для отображения сообщения
alt.on('chat:message', (message, color) => {
    // Начало команды текста
    game.beginTextCommandPrint('STRING');
    // Добавление строки сообщения
    game.addTextComponentSubstringPlayerName(message);
    // Завершение команды текста и отображение сообщения на 5 секунд
    game.endTextCommandPrint(5000, true);
});