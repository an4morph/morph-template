interface IProps {
  className?: string
}

export const Header = ({ className }: IProps): JSX.Element => {
  return (
    <div className={className}>
      Header
    </div>
  )
}