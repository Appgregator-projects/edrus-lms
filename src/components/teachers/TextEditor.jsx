import { Editor } from 'draft-js'
import React from 'react'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function TextEditor() {
	return (
		<Editor
			// editorState={data?.description ? data.description : <></>}
			toolbarClassName="toolbarClassName"
			wrapperClassName="wrapperClassName"
			editorClassName="editorClassName"
			onEditorStateChange={(e) => console.log(e)}
		/>
	)
}

export default TextEditor