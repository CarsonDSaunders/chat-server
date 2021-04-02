let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        let newMessage = {
            text: req.body.text,
            time: req.body.time,
            id: id,
        }
        messages.push(newMessage);
        id++;
        res.status(200).send(messages);

    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        let oldMessage = messages.find((ele) => (parseInt(ele.id) === parseInt(req.params.id)));
        let index = messages.indexOf(oldMessage);
        messages[index].text = req.body.text;
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        let deletedMessage = messages.find((ele) => (parseInt(ele.id) === parseInt(req.params.id)));
        let index = messages.indexOf(deletedMessage);
        messages.splice(index, 1);
        res.status(200).send(messages);
    },
}