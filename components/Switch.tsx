import { nanoid } from 'nanoid'
import { CSSProperties, PropsWithChildren, useEffect, useRef, useState } from 'react'

interface SwitchProps {
  id?: string
  checked?: boolean
  size?: 'small' | 'medium' | 'large'
  circleColor?: string
  onColorClass?: string
  offColorClass?: string
  textColorClass?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Switch = ({
  id,
  checked = undefined,
  size = 'medium',
  circleColor = '#fff',
  onColorClass = 'checked:bg-sky-400',
  offColorClass = 'bg-gray-400',
  textColorClass = 'text-gray-900',
  onChange = () => null,
  children = '',
}: PropsWithChildren<SwitchProps>) => {
  const switchId = useRef(id || nanoid())

  const circle = {
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23${circleColor.replace(
      '#',
      ''
    )}'/%3e%3c/svg%3e")`,
  }

  const inputClass = [
    'appearance-none',
    'cursor-pointer',
    offColorClass,
    'rounded-full',
    'align-top',
    'bg-no-repeat',
    'bg-contain',
    'focus:outline-none',
    'shadow-sm',
    'mt-px',
    'ease-in-out',
    'duration-200',
    `${onColorClass}`,
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
      <label htmlFor={switchId.current} className={`${textColorClass} cursor-pointer inline-block`}>
        {children}
      </label>
    </div>
  )
}
