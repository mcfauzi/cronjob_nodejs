import db from './libs/db';
import mailer from './libs/mailer';

const processData = async () => {
    db.connect(function (err) {
        if (err) console.log(err);
        console.log('DB Connected!');
        var sql = "SELECT `id`, `email`, `subject`, `message` " +
            " FROM `queue_email` WHERE `status` = 0 " +
            // " AND `email` = 'sanzcruzer@gmail.com' " +
            " ORDER BY `id` ASC " +
            // " LIMIT 2";
            " LIMIT 5";

        db.query(sql, function (err, result, fields) {
            if (err) console.log(err);
            result.forEach(function (row) {
                var mailOpt = {
                    from: "official@gotravelly.com",
                    to: row.email,
                    subject: row.subject,
                    html: row.message
                }

                mailer.sendMail(mailOpt, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent to ' + row.email + ' !');
                        var updSQL = "UPDATE `queue_email` SET status = 1 WHERE id = '" + row.id + "'";
                        db.query(updSQL, function (err, result) {
                            if (err) console.log(err);
                            console.log(result.affectedRows + " with id " + row.id + " record(s) updated");
                        });
                    }
                });
            });
            console.log('Process successfull!');
        });
    });
}

export default processData;