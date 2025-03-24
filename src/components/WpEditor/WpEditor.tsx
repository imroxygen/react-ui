import React from "react";
import { Editor } from "@tinymce/tinymce-react";

interface WpEditorProps {
    apiKey: string;
    value: string;
    onEditorChange: (content: string) => void;
}

const WpEditor: React.FC<WpEditorProps> = ({ apiKey, value, onEditorChange }) => {
    return (
        <Editor
            apiKey={apiKey}
            value={value}
            init={{
                height: 200,
                plugins: "media",
            }}
            onEditorChange={onEditorChange}
        />
    );
};

export default WpEditor;
