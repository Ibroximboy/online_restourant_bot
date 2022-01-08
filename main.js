const TelegramBot = require('node-telegram-bot-api');

const token = '5010199120:AAFxnmsFrKXy4ucvCsYn1rAfNVDnGjKVmAo';

const bot = new TelegramBot(token, {
    polling: true
});

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1]; 
    bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text
    if(text == "/start"){
        bot.sendMessage(chatId, `Welcome to Online-Restourant-Bot!

All commands:

All foods - /allfoods
Make an order - /order
All burgers - /burgers
All lavash - /lavash
All hotdogs - /hotdogs
All sandwiches - /sandwiches
All pizza - /pizza
About Creators - /creators

Bon appetit!👌`)
    }

    //All foods start

    else if (text == "/allfoods") {
        bot.sendMessage(chatId, 'All Foods:')
        bot.sendPhoto(chatId, "https://i.ytimg.com/vi/TTnIPBOnpWk/maxresdefault.jpg", {
            caption: `Classic Lavash
cost: 21.000`})
        bot.sendPhoto(chatId, "https://www.restoran-shafran.uz/image/cache/catalog/product/lavash-v-tandire-i-s-sirom-1-750x500.jpg", {
            caption: `Tandoor Lavash
cost: 19.000`})
        bot.sendPhoto(chatId, "https://www.preparedfoods.com/ext/resources/ISSUES/2019/December/02_FalafelLambBurger_0041.jpg?1577927442", {
            caption: `Classic burger
cost: 25.000`})
        bot.sendPhoto(chatId, "https://recipe30.com/wp-content/uploads/2021/03/Chicken-burger-Italian-twist.jpg", {
            caption: `Chiken burger
cost: 23.000`})
        bot.sendPhoto(chatId, "https://static.1000.menu/img/content-v2/02/1d/53551/xot-dog-v-domashnix-usloviyax-v-bulochke-s-sosiskoi_1616347265_21_max.jpg", {
            caption: `Classic hotdog
cost: 8.000`})
        bot.sendPhoto(chatId, "https://st3.depositphotos.com/9050074/13856/i/600/depositphotos_138568396-stock-photo-turkish-chicken-doner-sandwich-with.jpg", {
            caption: `Doner
cost: 18.000`})
        bot.sendPhoto(chatId, "https://image.freepik.com/free-photo/club-sandwiches-with-fried-potatoes-wooden-board_114579-1910.jpg", {
            caption: `Classic sandwich
cost: 15.000`})
        bot.sendPhoto(chatId, "https://insanelygoodrecipes.com/wp-content/uploads/2021/03/Homemade-Grilled-Cheese-Sandwich-with-Tomatoes.png", {
            caption: `Cheese sandwich
cost: 15.000`})
        bot.sendPhoto(chatId, "https://www.johnsonville.com/dam/jcr:7cb6fdab-798e-4503-af63-324d76abedd3/classic-pizza-margherita", {
            caption: `Classic pizza
cost: 38.000`})
        bot.sendPhoto(chatId, "https://vkuso.ru/data/picca-pepperoni-na-drozhzhevom-teste.jpg", {
            caption: `Sousage pizza
cost: 38.000`})
    }

    //All foods end

    //Burgers

    else if (text == "/burgers") {
        bot.sendPhoto(chatId, "https://www.preparedfoods.com/ext/resources/ISSUES/2019/December/02_FalafelLambBurger_0041.jpg?1577927442", {
            caption: `Classic burger
cost: 25.000

Compound:
Cheese, Cucumber, Onion, Tomato, Cutlet, Lettuce🍔`
        })
        bot.sendPhoto(chatId, "https://recipe30.com/wp-content/uploads/2021/03/Chicken-burger-Italian-twist.jpg", {
            caption: `Chiken burger
cost: 23.000

Compound:
Cheese, Cucumber, Onion, Tomato, Chiken, Lettuce🍔`
        })
    }

    //Lavash

    else if (text == "/lavash") {
        bot.sendPhoto(chatId, "https://i.ytimg.com/vi/TTnIPBOnpWk/maxresdefault.jpg", {
            caption: `Classic Lavash
cost: 21.000

Compound:
Tomatoes, Meat, Cucumbers, Chips, Cheese, Lettuce🌯`
        })
        bot.sendPhoto(chatId, "https://www.restoran-shafran.uz/image/cache/catalog/product/lavash-v-tandire-i-s-sirom-1-750x500.jpg", {
            caption: `Tandoor Lavash
cost: 19.000

Compound:
Tomatoes, Meat, Cucumbers, Chips, Cheese, Lettuce🌯`
        })
    }

    //Hotdogs

    else if (text == "/hotdogs") {
        bot.sendPhoto(chatId, "https://static.1000.menu/img/content-v2/02/1d/53551/xot-dog-v-domashnix-usloviyax-v-bulochke-s-sosiskoi_1616347265_21_max.jpg", {
            caption: `Classic hotdog
cost: 8.000

Compound:
Tomatoes, Cheese, Sausage, Chips, Lettuce🌭`
        })
        bot.sendPhoto(chatId, "https://st3.depositphotos.com/9050074/13856/i/600/depositphotos_138568396-stock-photo-turkish-chicken-doner-sandwich-with.jpg", {
            caption: `Doner
cost: 18.000

Compound:
Meat, Chicken, Lettuce🌭`
        })
    }

    //Sandwiches

    else if (text == "/sandwiches") {
        bot.sendPhoto(chatId, "https://image.freepik.com/free-photo/club-sandwiches-with-fried-potatoes-wooden-board_114579-1910.jpg", {
            caption: `Classic sandwich
cost: 15.000

Compound:
Grilled meat, Tomatoes, Cucumbers, Lettuce, French fries🥪`
        })
        bot.sendPhoto(chatId, "https://insanelygoodrecipes.com/wp-content/uploads/2021/03/Homemade-Grilled-Cheese-Sandwich-with-Tomatoes.png", {
            caption: `Cheese sandwich
cost: 15.000

Compound:
Tomatoes, Lettuce, Cheese🥪`
        })
    }

    //Pizza

    else if (text == "/pizza") {
        bot.sendPhoto(chatId, "https://www.johnsonville.com/dam/jcr:7cb6fdab-798e-4503-af63-324d76abedd3/classic-pizza-margherita", {
            caption: `Classic pizza
cost: 38.000

Compound:
Cheese, Tomatoes, Sousages, Lettuce, Olive🍕`
        })
        bot.sendPhoto(chatId, "https://vkuso.ru/data/picca-pepperoni-na-drozhzhevom-teste.jpg", {
            caption: `Sousage pizza
cost: 38.000

Compound:
Cheese, Sousages, Lettuce🍕`
        })
    }

    //Creators

    else if(text == "/creators") {
        bot.sendMessage(chatId, `Bot made in BotFather with

@ibroxim_KHasanov
@im_bots_admin

This is my first bot😎
`)
    }
    else if (text == "/order") {
        bot.sendMessage(chatId, "Choose what you want to order", {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Classic burger",
                            callback_data: '1'
                        },
                        {
                            text: "Chicken burger",
                            callback_data: '2'
                        }
                    ],
                    [
                        {
                            text: "Classic lavash",
                            callback_data: '4'
                        },
                        {
                            text: "Tandoor lavash",
                            callback_data: '5'
                        }
                    ],
                    [
                        {
                            text: "Classic hotdog",
                            callback_data: '6'
                        },
                        {
                            text: "Doner",
                            callback_data: '7'
                        }
                    ],
                    [
                        {
                            text: "Classic sandwich",
                            callback_data: '8'
                        },
                        {
                            text: "Cheese sandwich",
                            callback_data: '9'
                        }
                    ],
                    [
                        {
                            text: "Pizza",
                            callback_data: '10'
                        },
                        {
                            text: "Sousage pizza",
                            callback_data: '11'
                        }
                    ]
                ]
            }
        })
    }
});

bot.on('callback_query', query => {
    bot.sendMessage(query.message.chat.id, 'Our admins contact with you')
})