// src/app/models/utilisateur.interface.ts
export interface Utilisateur {
  id?: number;
  roles: string[];           // ex: ['ROLE_USER']
  username: string;          // champ utilisé comme identifiant (unique)
  genre?: string | null;
  nom?: string | null;
  prenom?: string | null;
  email: string;
  // dates renvoyées par API Platform sont souvent ISO strings
  dateNaissance?: string | null;   // format ISO (e.g. "1990-12-31T00:00:00+00:00") ou "dd/mm/YYYY" suivant config
  createdAt?: string | null;       // ISO or formatted string
  isVerified?: boolean;
  profilPicture?: string | null;
  billingAddress?: string | null;

  // relations non-explicites — si tu veux, tu peux typer en tableaux d'ids
  // annonces?: number[] | null;
  // logements?: number[] | null;
}
