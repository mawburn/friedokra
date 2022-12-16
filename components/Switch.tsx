import { nanoid } from 'nanoid'
import { CSSProperties, PropsWithChildren, useEffect, useRef, useState } from 'react'

interface SwitchProps {
  id?: string
  checked?: boolean
  size?: 'small' | 'medium' | 'large'
  circleColor?: string
  onColor?: string
  offColor?: string
  textColor?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Switch = ({
  id,
  checked = undefined,
  size = 'medium',
  circleColor = '#fff',
  onColor = 'bg-sky-500',
  offColor = 'bg-gray-400',
  textColor = 'text-gray-800',
  onChange = () => null,
  children = '',
}: PropsWithChildren<SwitchProps>) => {
  const switchId = useRef(id || nanoid())
  const [_offColor, setOffColor] = useState(
    offColor.includes('#') ? `bg-[${offColor}]` : `bg-${offColor.replace('bg-', '')}`
  )
  const [_onColor, setOnColor] = useState(
    onColor.includes('#') ? `bg-[${onColor}]` : `bg-${onColor.replace('bg-', '')}`
  )
  const [_textColor, setTextColor] = useState(
    textColor.includes('#') ? `text-[${textColor}]` : `text-${textColor.replace('text-', '')}`
  )

  const [circle, setCircle] = useState<CSSProperties>({})

  useEffect(() => {
    setOffColor(offColor.includes('#') ? `bg-[${offColor}]` : `bg-${offColor.replace('bg-', '')}`)
    setOnColor(onColor.includes('#') ? `bg-[${onColor}]` : `bg-${onColor.replace('bg-', '')}`)
    setTextColor(
      textColor.includes('#') ? `text-[${textColor}]` : `text-${textColor.replace('text-', '')}`
    )
    setCircle({
      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23${circleColor.replace(
        '#',
        ''
      )}'/%3e%3c/svg%3e")`,
    })
  }, [offColor, onColor, textColor, circleColor])

  const inputClass = [
    'appearance-none',
    'cursor-pointer',
    _offColor,
    'rounded-full',
    'align-top',
    'bg-no-repeat',
    'bg-contain',
    'focus:outline-none',
    'shadow-sm',
    'mt-px',
    'ease-in-out',
    'duration-200',
    `checked:${_onColor}`,
    'checked:bg-right',
    'motion-reduce:transition-none',
  ]

  switch (size) {
    case 'large':
      inputClass.push('w-12', 'h-6', 'mr-2')
      if (children) {
        inputClass.push('mr-3')
      }
      break
    case 'small':
      inputClass.push('w-6', 'h-4')
      if (children) {
        inputClass.push('mr-1')
      }
      break
    case 'medium':
    default:
      inputClass.push('w-9', 'h-5')
      if (children) {
        inputClass.push('mr-2')
      }
  }

  return (
    <div className="flex justify-center">
      <input
        role="switch"
        type="checkbox"
        id={switchId.current}
        checked={checked}
        style={circle}
        className={inputClass.join(' ')}
        onChange={onChange}
      />
      <label htmlFor={switchId.current} className={`${_textColor} cursor-pointer inline-block`}>
        {children}
      </label>
    </div>
  )
}
