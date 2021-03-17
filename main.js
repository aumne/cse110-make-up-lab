class IntegerInputError extends Error {
    constructor(bad_input) {
        super(`Integer input required but not given; input was: ${bad_input}`);
        this.name = 'IntegerError';
        this.bad_input = bad_input;
    }
}

const input_form = document.getElementById('submission-form');

//submit form
const input = document.getElementById('number_input');
const output = document.getElementById('number_output');
input_form.addEventListener('submit', increment_input);
function increment_input(event) {
    event.preventDefault();
    try {
        if (isNaN(input.value) || !Number.isInteger(Number(input.value))) {
            throw new IntegerInputError(input.value);
        }
        output.textContent = `Result: ${++input.value}`;
    } catch (err) {
        alert(`Error: ${err.message}`);
        output.textContent = `Bad input`;
    } finally {
        console.log(`Input: ${input.value}`);
    }
}

//test console.log()
const log_ = document.getElementById('log-btn');
log_.addEventListener('click', test_log);
function test_log(event) {
    event.preventDefault();
    console.log(`${input.value} is a good value`);
}

//test console.error()
const error_ = document.getElementById('error-btn');
error_.addEventListener('click', test_error);
function test_error(event) {
    event.preventDefault();
    console.error(`${input.value} is a bad value`);
}

//test console.table()
const table_ = document.getElementById('table-btn');
table_.addEventListener('click', test_table);
function test_table(event) {
    event.preventDefault();
    const input_num = Number(input.value);
    const table_data = [
        {name: 'default input', input: 0, output: 1},
        {name: 'current input', input: input_num, output: input_num + 1},
    ];
    console.table(table_data);
}

//test console.dir()
const dir_ = document.getElementById('dir-btn');
dir_.addEventListener('click', test_dir);
function test_dir(event) {
    event.preventDefault();
    console.dir(dir_);
}

//test console.dirxml()
const dirxml_ = document.getElementById('dirxml-btn');
dirxml_.addEventListener('click', test_dirxml);
function test_dirxml(event) {
    event.preventDefault();
    console.dirxml(document.body);
}

//test console.group()
const group_start = document.getElementById('group-start-btn');
group_start.addEventListener('click', test_group_start);
function test_group_start(event) {
    event.preventDefault();
    console.group('Console Group');
}

//test console.groupEnd()
const group_end = document.getElementById('group-end-btn');
group_end.addEventListener('click', test_group_end);
function test_group_end(event) {
    event.preventDefault();
    console.groupEnd('Console Group');
}

//test console.time()
const time_start = document.getElementById('time-start-btn');
time_start.addEventListener('click', test_time_start);
function test_time_start(event) {
    event.preventDefault();
    console.log('Started timer.');
    console.time();
}

//test console.timeEnd()
const time_end = document.getElementById('time-end-btn');
time_end.addEventListener('click', test_time_end);
function test_time_end(event) {
    event.preventDefault();
    console.log('Ended timer.');
    console.timeEnd();
}

//test console.trace()
const trace_ = document.getElementById('trace-btn');
trace_.addEventListener('click', test_trace);
function test_trace(event) {
    event.preventDefault();
    const tic = () => { tac(); };
    const tac = () => { toe(); };
    const toe = () => { console.trace(); };
    tic();
}