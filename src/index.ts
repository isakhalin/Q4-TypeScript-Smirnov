const getArgs = (): string[] | undefined => {
    const args = process.argv.slice(2);

    if (args.length) {
        return args;
    } else {
        return undefined;
    }
};

const forEach = <T = any>(array: T[], callback: (value: T) => void) => {
    array.forEach((value) => callback(value));
};

const main = () => {
    const args = getArgs();
    if (args) {
        console.log(args);
        console.log(args.length);
        forEach<string>(args, console.log);
    } else {
        console.log("Вы не передали значения")
    }
};

main();