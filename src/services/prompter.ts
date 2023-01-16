export interface ICreatePrompt {
	/**
	 * the task that should be completed
	 */
	command: string;

	/**
	 * command - the context of the task
	 */
	context: string;

	/**
	 * set to true, to add the remark about tests
	 */
	addTests: boolean;

	/**
	 * set to true, to add the remark about documentation
	 */
	addDocumentation: boolean;
}

/**
 * PrompterService class
 *
 * @class PrompterService
 * @classdesc a class that provides a function to create a prompt
 */
export class PrompterService {
	/**
	 * Create prompt
	 *
	 * @param
	 * @static
	 * @memberof PrompterService
	 */
	public static createPrompt(cfg: ICreatePrompt): string {
		let basePrompt = `Given ${cfg.context} do ${cfg.command} only output code. Don't explain.`;

		if (cfg.addTests) {
			basePrompt += "Add AVA tests.";
		}

		if (cfg.addDocumentation) {
			basePrompt += "Add Documentation.";
		}

		return basePrompt;
	}
}