export class RegUser {

  constructor(
    public first_name: string = '',
    public last_name: string = '',
    public email: string = '',
    public password: string = '',
    public passwordConfirm: string = '',
    public street_address: string = '',
    public city: string = '',
    public state: string = '',
    public lucky: boolean = false,
    public unit_apt?: string
  ) { }
}
