import execa from 'execa'

export const shellCommand = (cmdString) => {
  return () => execa.command(cmdString, { stdio: 'inherit' })
}

export const runCommands = (...args) => {
  const options = {
    commands: args
  }
  return {
    name: 'run-commands',
    async writeBundle (outputOptions, bundle) {
      try {
        for (const commandFunction of options.commands) {
          await commandFunction()
        }
      } catch (error) {
        this.error(error)
      }
    }
  }
}
