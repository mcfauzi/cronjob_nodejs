import db from './libs/db';
import mailer from './libs/mailer';

const processData = async () => {
    // console.log(mailer);

    db.connect(function (err) {
        if (err) console.log(err);
        console.log('Connected!');
        var sql = "SELECT `id`, `email`, `subject`, `message` " +
            " FROM `queue_email` WHERE `status` = 0 AND `email` = 'sanzcruzer@gmail.com' " +
            " ORDER BY `id` ASC LIMIT 1 ";
        db.query(sql, function (err, result, fields) {
            if (err) console.log(err);
            result.forEach(function (row) {
                var mailOpt = {
                    from: "fauzi@gotravelly.com",
                    to: row.email,
                    subject: row.subject,
                    html: row.message
                }

                mailer.sendMail(mailOpt, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent!');
                        var updSQL = "UPDATE `queue_email` SET status = 1 WHERE id = '" + row.id + "'";
                        db.query(updSQL, function (err, result) {
                            if (err) console.log(err);
                            console.log(result.affectedRows + " record(s) updated");
                        });
                    }
                });
            });
            console.log('Done');
        });
    });
}

export default processData;