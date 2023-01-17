import React, { useState } from "react";
import { PrompterService } from "../services/prompter";

interface Props {
	// any other props that this component might need
}

export const CoderForm: React.FC<Props> = () => {
	const [command, setCommand] = useState("");
	const [context, setContext] = useState("");
	const [addTests, setAddTests] = useState(false);
	const [addDocumentation, setAddDocumentation] = useState(true);
	const [fastReviewMode, setFastReviewMode] = useState(false);
	const [out, setOut] = useState("");

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const prompt = PrompterService.createPrompt({
			command,
			context,
			addTests,
			addDocumentation,
			fastReviewMode
		});
		setOut(prompt);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className={"input-section"}>
					<label htmlFor="taskInputField">
						The task that should be completed
					</label>
					<input id="taskInputField" placeholder={"Enter a task"} type="text" className="form-control" value={command}
					       onChange={(e) => setCommand(e.target.value)}/>
					<br/>
					<label htmlFor="contextInputField">
						The context that should be used
					</label>
					<textarea id="contextInputField"  placeholder={"Enter the context of the task"} className="form-control" value={context}
					          onChange={(e) => setContext(e.target.value)}/>
					<br/>

                    <div className={"checkbox-section"}>
                        <div className="checkbox-grid">
                            <div>
                                <input type="checkbox" id="createAVATests" onChange={e => setAddTests(e.target.checked)}/>
                                <label htmlFor="createAVATests">Create AVA tests</label>
                            </div>
                            <div>
                                <input type="checkbox" id="createDocumentation" onChange={e => setAddDocumentation(e.target.checked)}/>
                                <label htmlFor="createDocumentation">Create documentation</label>
                            </div>
                            <div>
                                <input type="checkbox" id="createFastCR" onChange={e => setFastReviewMode(e.target.checked)}/>
                                <label htmlFor="createFastCR">Create fast CR</label>
                            </div>
                        </div>
                    </div>


					<input id="createPrompt" type="submit" className="btn btn-primary" value="Create Prompt"/>
				</div>
                <hr/>
                <hr/>
				<div className={"output-section"}>
					<div className="form-group">
						<label>
							The output prompt
							<textarea readOnly={true}  placeholder={"Generated output prompt"} id="promptOut" className="form-control" value={out}
							          onChange={(e) => setOut(e.target.value)}/>
						</label>
					</div>
				</div>
			</form>

			<p>
				TODO: Introduce megaprompt support
			</p>
		</div>
	);
};
