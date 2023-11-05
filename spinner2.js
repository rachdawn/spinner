const spinnerInput = [
    {char: "|", delay: 100},
    {char: "/", delay: 300},
    {char: "-", delay: 500},
    {char: "\\", delay: 700},
    {char: "|", delay: 900},
    {char: "/", delay: 1100},
    {char: "-", delay: 1300}
];

for (const i of spinnerInput) {
    setTimeout(() => {
        process.stdout.write('\r' + i.char);
    }, i['delay']);
};
