module.exports = {
    plugins: [
        [ '@wordpress/babel-plugin-import-jsx-pragma', {
            scopeVariable: 'cavyCreateElement',
            scopeVariableFrag: 'Fragment',
            source: 'cavy',
            isDefault: false,
        } ],
        [ '@babel/plugin-transform-react-jsx', {
            pragma: 'cavyCreateElement',
            pragmaFrag: 'Fragment',
        } ],
    ]
  };
  