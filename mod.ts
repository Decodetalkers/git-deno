class SimpleGit {
  email: string;
  name: string;

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }

  get author(): string {
    return `${this.name} <${this.email}>`;
  }

  public async commit(msg: string): Promise<Deno.CommandOutput> {
    const gitcommit = new Deno.Command("git", {
      args: [
        "commit",
        `--author=${this.author}`,
        "-m",
        msg,
      ],
    });
    return await gitcommit.output();
  }

  public commitSync(msg: string): Deno.CommandOutput {
    const gitcommit = new Deno.Command("git", {
      args: [
        "commit",
        `--author=${this.author}`,
        "-m",
        msg,
      ],
    });
    return gitcommit.outputSync();
  }

  public async init(pattern: string): Promise<Deno.CommandOutput> {
    const gitinit = new Deno.Command("git", {
      args: [
        "init",
        pattern,
      ],
    });
    return await gitinit.output();
  }

  public initSync(pattern: string): Deno.CommandOutput {
    const gitinit = new Deno.Command("git", {
      args: [
        "init",
        pattern,
      ],
    });
    return gitinit.outputSync();
  }

  public addSync(pattern: string): Deno.CommandOutput {
    const gitadd = new Deno.Command("git", {
      args: [
        "add",
        pattern,
      ],
    });
    return gitadd.outputSync();
  }

  public async add(pattern: string): Promise<Deno.CommandOutput> {
    const gitadd = new Deno.Command("git", {
      args: [
        "add",
        pattern,
      ],
    });
    return await gitadd.output();
  }
}

export default SimpleGit;
