import tape from 'tape';
import { tokenize } from '../src/index';

tape('Comments', t => {
	t.deepEqual(tokenize('/* A comment */'), []);

	t.throws(() => {
		tokenize('/* A comment \\');
	}, /unterminated escape/);

	t.throws(() => {
		tokenize('/* A comment \\*/');
	}, /unterminated comment/);
	t.end();
});

tape('Whitespace', t => {
	t.equal(tokenize('a b	c\nd').filter(i => i.type === 'whitespace').length, 3);
	t.end();
});

tape('Strings', t => {
	t.deepEqual(
		tokenize('"a string"'),
		[{ type: 'string', value: 'a string' }],
		'double quotes'
	);

	t.deepEqual(
		tokenize("'another string'"),
		[{ type: 'string', value: 'another string' }],
		'single quotes'
	);

	t.throws(
		() => {
			tokenize('"broken string');
		},
		/unterminated string/,
		'unterminated string'
	);

	t.throws(
		() => {
			tokenize('"broken\nstring"');
		},
		/Unexpected newline/,
		'unexpected newline'
	);
	t.end();
});
