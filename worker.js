
self.importScripts('./wasm_exec.js')

function wasmready() {
    postMessage({
        msg: "ready"
    });
}
const go = new Go()
let mod, inst
WebAssembly.instantiateStreaming(fetch("lib.wasm"), go.importObject).then(
    async result => {
        mod = result.mod
        inst = result.instance
        await go.run(inst)
    }
)

addEventListener('message', async (e) => {
    const msg = e.data.msg
    const id = e.data.id
    if (msg == 'raidSim') {
        const outputData = raidSimJson(JSON.stringify(e.data.inputData, null, 2))
        postMessage({
            msg: 'raidSim',
            outputData: JSON.parse(outputData),
            id: id
        })
        postMessage({
            msg: 'ready'
        })
    }
    if (msg == 'stats') {
        let statsRequest = JSON.stringify({raid: e.data.inputData.raid}, null, 2)
        let outputData = computeStatsJson(statsRequest)
        let output = JSON.parse(outputData)
        let gearStats = output.raidStats.parties[0].players[0].gearStats
        let bonusStats = []
        for (let stat of gearStats) {
            bonusStats.push(stat * 0.12)
        }
        let request = e.data.inputData
        request.raid.parties[0].players[0].bonusStats = bonusStats
        outputData = raidSimJson(JSON.stringify(request, null, 2))
        postMessage({
            msg: 'raidSim',
            outputData: JSON.parse(outputData),
            id: id
        })
        postMessage({
            msg: 'ready'
        })
    }
}, false)