const connection = require('./config');

const insertTablesQuery = `INSERT INTO posts (id, title, body, userId) 
VALUES ('999','sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto', 2999),
('1000', qui est esse', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla', 2999),
('1001', test3 title rerum tempore vitae', 'test body 3 sunt aut facere repellat provident occaecati sunt aut facere repellat provident occaecati', 3000),
('1002', test4 title facere repellat', 'test body 4 repellat provident repellat provident repellat provident', 3000),
('1003', test5 title', 'repellat provident occaecati', 3000),
('1004', test6 title', 'test body dolor beatae ea dolores', 3001);

INSERT INTO comments (id, name, email, body, postId) 
VALUES ('2000', comment 1 sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 'test1@gmail.com', 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto', 999),
('2001','comment 2 qui est esse', 'test2@gmail.com', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla', 999),
('2001','test 3 comment 3 title rerum tempore vitae', 'test3@gmail.com', 'test body 3 sunt aut facere repellat provident occaecati sunt aut facere repellat provident occaecati', 1000),
('2001','test 4 comment 4 title facere repellat', 'test4@gmail.com', 'test body 4 repellat provident repellat provident repellat provident', 1000),
('2001','test 5 comment 5 title', 'test5@gmail.com', 'repellat provident occaecati', 1000),
('2001','test 6 comment 6 title', 'test6@gmail.com', 'test body dolor beatae ea dolores', 1001);

INSERT INTO users (id, name, username, email, website, company)
VALUES ('2999', 'Oleksandr', 'userAlex', 'olexandr@gmail.com' , 'www.alex.com', 'AlexCompany'),
('3000', 'Olga', 'userOlga', 'olga@gmail.com' , 'www.olga.com', 'OlgaCompany'),
('3001', 'Vasul', 'userVasul', 'vasul@gmail.com' , 'www.vasul.com', 'VasulCompany'),
`;

connection.connect();

connection.query(insertTablesQuery, (err, rows, fields) => {
    if (err) throw err;
    console.log('inserted! success!');
    res.send(rows);
});

connection.end();
