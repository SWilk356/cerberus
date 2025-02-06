export default class FigmaApi {
  private baseUrl: string = 'https://api.figma.com'
  private file: string = 'ducwqOCxoxcWc3ReV3FYd8'
  private token: string

  constructor(token: string) {
    this.token = token
  }

  public get figmaUrl(): string {
    return `${this.baseUrl}/v1/files/${this.file}`
  }

  figmaFetch = async (path: string) => {
    return await fetch(`${this.figmaUrl}${path}`, {
      headers: {
        Accept: '*/*',
        'X-Figma-Token': this.token,
      },
    })
  }

  async getLocalVariables() {
    const resp = await this.figmaFetch('/variables/local')
    return await resp.json()
  }

  async getTextStyles(nodeIds: string) {
    const resp = await this.figmaFetch(`/nodes?ids=${nodeIds}`)
    return await resp.json()
  }
}
