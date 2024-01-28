interface Service {
  readonly clearService: () => Promise<void>;
  readonly migrate: () => Promise<void>;
  readonly rollback: () => Promise<void>;
}

export default Service;
