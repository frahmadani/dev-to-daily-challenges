const process = require('process');

const print_diamond = (size) => {
    if (size % 2 === 0) {
        return null;
    }

    // print the upper part
    for (let current_line = 0; current_line <= size; current_line++) {
        if (current_line % 2 === 1) { // for odd lines only
            for (i = size-current_line; i > 0; i--) {
                if (i % 2 === 1) {
                    process.stdout.write(' ');
                }
            }

            for (j = 0; j < current_line; j++) {
                process.stdout.write('*');
            }
            process.stdout.write('\n');
        }
    }

    // print the lower part
    for (let current_line = size-2; current_line >= 0; current_line--) {
        if (current_line % 2 === 1) { // for odd lines only
            for (i = size-current_line; i > 0; i--) {
                if (i % 2 === 1) {
                    process.stdout.write(' ');
                }
            }

            for (j = 0; j < current_line; j++) {
                process.stdout.write('*');
            }
            process.stdout.write('\n');
        }

    }
}

print_diamond(11);