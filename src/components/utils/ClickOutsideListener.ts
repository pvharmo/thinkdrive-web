interface clickOutsideInterface {
  enabled: boolean
  cb: () => void
}

interface enabledIterface {
  enabled: boolean
}

interface clickOutsideReturnInterface {
  update: (enabled: enabledIterface) => void
  destroy: () => void
}

export default (
  node: HTMLElement,
  { enabled: initialEnabled, cb }: clickOutsideInterface
): clickOutsideReturnInterface => {
  const handleOutsideClick = ({ target }: Event) => {
    if (!node.contains(target as Node)) {
      cb()
    }
  }

  function update({ enabled }: enabledIterface) {
    if (enabled) {
      window.addEventListener('click', handleOutsideClick)
    } else {
      window.removeEventListener('click', handleOutsideClick)
    }
  }

  update({ enabled: initialEnabled })
  return {
    update,
    destroy() {
      window.removeEventListener('click', handleOutsideClick)
    }
  }
}
