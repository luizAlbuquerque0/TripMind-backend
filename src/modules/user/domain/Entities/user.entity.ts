// src/core/entities/user.entity.ts

export class UserEntity {
  public readonly id: string;
  public readonly email: string;
  public readonly name: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
  public readonly password: string;

  constructor(props: { email: string; password: string; name: string }) {
    this.email = props.email;
    this.name = props.name;
    this.password = props.password;
  }
}
