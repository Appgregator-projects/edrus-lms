import React from 'react';

import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
// Import bootstrap(v3 or v4) dependencies
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/tooltip';
import $ from 'jquery';
window.$ = $;
window.jQuery = $;
const RichTextEditor = () => {
  //   onChange = content => {
  //     console.log('onChange', content);
  //   };

  return (
    <ReactSummernote
      options={{
        disableDragAndDrop: true,
        height: 200,
        toolbar: [
          ['style', ['style']],
          ['font', ['bold', 'underline', 'clear']],
          ['fontname', ['fontname']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['table', ['table']],
          ['insert', ['link', 'picture', 'video']],
          ['view', ['fullscreen', 'codeview']],
        ],
      }}
      //  onChange={this.onChange}
    />
  );
};
export default RichTextEditor;
