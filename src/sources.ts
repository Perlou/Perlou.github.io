function getUrl(url: string) {
    return new URL(`./static${url}`, import.meta.url).href
}

const sources: Resource[] = [
    {
        name: 'computerSetupModel',
        type: 'gltfModel',
        path: getUrl('/models/Computer/computer_setup.glb'),
    },
    {
        name: 'computerSetupTexture',
        type: 'texture',
        path: getUrl('/models/Computer/baked_computer.jpg'),
    },
    {
        name: 'environmentModel',
        type: 'gltfModel',
        path: getUrl('/models/World/environment.glb'),
    },
    {
        name: 'environmentTexture',
        type: 'texture',
        path: getUrl('/models/World/baked_environment.jpg'),
    },
    {
        name: 'decorModel',
        type: 'gltfModel',
        path: getUrl('/models/Decor/decor.glb'),
    },
    {
        name: 'decorTexture',
        type: 'texture',
        path: getUrl('/models/Decor/baked_decor_modified.jpg'),
    },
    {
        name: 'monitorSmudgeTexture',
        type: 'texture',
        path: getUrl('/textures/monitor/layers/compressed/smudges.jpg'),
    },
    {
        name: 'monitorShadowTexture',
        type: 'texture',
        path: getUrl('/textures/monitor/layers/compressed/shadow-compressed.png'),
    },
    {
        name: 'mouseDown',
        type: 'audio',
        path: getUrl('/audio/mouse/mouse_down.mp3'),
    },
    {
        name: 'mouseUp',
        type: 'audio',
        path: getUrl('/audio/mouse/mouse_up.mp3'),
    },
    {
        name: 'keyboardKeydown1',
        type: 'audio',
        path: getUrl('/audio/keyboard/key_1.mp3'),
    },
    {
        name: 'keyboardKeydown2',
        type: 'audio',
        path: getUrl('/audio/keyboard/key_2.mp3'),
    },
    {
        name: 'keyboardKeydown3',
        type: 'audio',
        path: getUrl('/audio/keyboard/key_3.mp3'),
    },
    {
        name: 'keyboardKeydown4',
        type: 'audio',
        path: getUrl('/audio/keyboard/key_4.mp3'),
    },
    {
        name: 'keyboardKeydown5',
        type: 'audio',
        path: getUrl('/audio/keyboard/key_5.mp3'),
    },
    {
        name: 'keyboardKeydown6',
        type: 'audio',
        path: getUrl('/audio/keyboard/key_6.mp3'),
    },
    {
        name: 'startup',
        type: 'audio',
        path: getUrl('/audio/startup/startup.mp3'),
    },
    {
        name: 'office',
        type: 'audio',
        path: getUrl('/audio/atmosphere/office.mp3'),
    },
    {
        name: 'ccType',
        type: 'audio',
        path: getUrl('/audio/cc/type.mp3'),
    },
]

export default sources
