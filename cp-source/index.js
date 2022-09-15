const fs = require('fs')
const path = require('path')


const filePath = '../test.js'
const dirPath = '../canvas'
const destination = '../destination'

function resolvePath(source) {
  if (!path.isAbsolute(source)) {
    return path.resolve(__dirname, source)
  }
  return source
}

function mkDestination(source, destination) {
  source = resolvePath(source)
  destination = path.resolve(resolvePath(destination), path.basename(source))
  return [source, destination]
}

function cpFile(source, destination) {
  const [newSource, newDestination] = mkDestination(source, destination)
  fs.copyFileSync(newSource, newDestination)
}

function cpDir(source, destination) {
  const [newSource, newDestination] = mkDestination(source, destination)

  function createDir(dirPath) {
    fs.mkdirSync(dirPath)
  }

  if (!fs.existsSync(newDestination)) createDir(newDestination)
  const files = fs.readdirSync(newSource, {
    withFileTypes: true
  })
  for (let i = 0; i < files.length; i++) {
    if (files[i].isFile()) {
      cpFile(path.resolve(newSource, files[i].name), newDestination)
    } else {
      cpDir(path.resolve(newSource, files[i].name), newDestination)
    }
  }
}

function cpSource(source, destination) {
  if (typeof source === 'string') {
    const isDir = fs.statSync(source).isDirectory()
    if (isDir) {
      cpDir(source, destination)
    } else {
      cpFile(source, destination)
    }
  } else if (source instanceof Array) {
    for (let i = 0; i < source.length; i++) {
      const isDir = fs.statSync(source[i]).isDirectory()
      if (isDir) {
        cpDir(source[i], destination)
      } else {
        cpFile(source[i], destination)
      }
    }
  } else {
    throw new Error('资源来源路径只能是字符串或数组')
  }
}

const paths = [filePath, dirPath]

cpSource(paths, destination)