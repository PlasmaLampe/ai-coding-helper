import React, { useState } from 'react';
import { PrompterService } from "../services/prompter";

interface Props {
    // any other props that this component might need
}

export const CoderForm: React.FC<Props> = () => {
    const [command, setCommand] = useState('');
    const [context, setContext] = useState('');
    const [addTests, setAddTests] = useState(false);
    const [addDocumentation, setAddDocumentation] = useState(true);
    const [out, setOut] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const prompt = PrompterService.createPrompt({
            command,
            context,
            addTests,
            addDocumentation
        });
        setOut(prompt);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>
                    The task that should be completed
                    <input id="taskInputField" type="text" className="form-control" value={command} onChange={(e) => setCommand(e.target.value)} />
                </label>
            </div>
            <div className="form-group">
                <label>
                    The context that should be used
                    <textarea id="contextInputField" className="form-control" value={context} onChange={(e) => setContext(e.target.value)} />
                </label>
            </div>
            <div className="form-group">
                <label>
                    <input id="createAVATests" type="checkbox" onChange={e => setAddTests(e.target.checked)} />
                    Create AVA tests
                </label>
            </div>
            <div className="form-group">
                <label>
                    <input id="createDocumentation" type="checkbox" onChange={e => setAddDocumentation(e.target.checked)} />
                    Add documentation
                </label>
            </div>
            <input id="createPrompt" type="submit" className="btn btn-primary" value="Create Prompt" />
            <div className="form-group">
                <label>
                    The output prompt
                    <textarea id="promptOut" className="form-control" value={out} onChange={(e) => setOut(e.target.value)} />
                </label>
            </div>
        </form>
    );
}
