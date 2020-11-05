17. Grammar

Selectors are parsed according to the following grammar:

```
<selector-list> = <complex-selector-list>
<complex-selector-list> = <complex-selector>#
<compound-selector-list> = <compound-selector>#
<simple-selector-list> = <simple-selector>#
<relative-selector-list> = <relative-selector>#
```

<complex-selector> = <compound-selector> [ <combinator>? <compound-selector> ]\*

<relative-selector> = <combinator>? <complex-selector>

<compound-selector> = [ <type-selector>? <subclass-selector>_
[ <pseudo-element-selector> <pseudo-class-selector>_ ]\* ]!

<simple-selector> = <type-selector> | <subclass-selector>

<combinator> = '>' | '+' | '~' | [ '|' '|' ]

<type-selector> = <wq-name> | <ns-prefix>? '\*'

<ns-prefix> = [ <ident-token> | '*' ]? '|'

<wq-name> = <ns-prefix>? <ident-token>

<subclass-selector> = <id-selector> | <class-selector> |
<attribute-selector> | <pseudo-class-selector>

<id-selector> = <hash-token>

<class-selector> = '.' <ident-token>

<attribute-selector> = '[' <wq-name> ']' |
'[' <wq-name> <attr-matcher> [ <string-token> | <ident-token> ] <attr-modifier>? ']'

<attr-matcher> = [ '~' | '|' | '^' | '$' | '*' ]? '='

<attr-modifier> = i | s

<pseudo-class-selector> = ':' <ident-token> |
':' <function-token> <any-value> ')'

<pseudo-element-selector> = ':' <pseudo-class-selector>
