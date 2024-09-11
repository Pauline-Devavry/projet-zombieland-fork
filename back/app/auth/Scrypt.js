// import { scryptSync, timingSafeEqual, randomBytes } from "crypto";

// export default class Scrypt {
//   static hash(password) {
//     // Génération d'un sel aléatoire de 16 octets et conversion en chaîne hexadécimale
//     const salt = randomBytes(16).toString("hex");
//     // Hachage du mot de passe en utilisant l'algorithme scrypt avec le sel généré
//     const hash = scryptSync(password, salt, 64, {
//       N: 131072, // Paramètre de coût pour la mémoire (plus il est élevé, plus c'est sécurisé, mais plus c'est lent)
//       maxmem: 134217728, // Limite de mémoire utilisée par scrypt (128 Mo)
//     });
//     // Retourne le hash et le sel concaténés en une seule chaîne
//     return `${hash.toString("hex")}.${salt}`;
//   }

//   static verify(password, storedhash) {
//     try {
//       // split() renvoie un tableau qui est déstructuré pour obtenir le hash et le sel séparément
//       const [hashedPassword, salt] = storedhash.split(".");
//       // Hachage du mot de passe fourni avec le même sel que celui utilisé lors de la création du hash
//       const hashedPasswordVerify = scryptSync(password, salt, 64, {
//         N: 131072,
//         maxmem: 134217728,
//       });
//       // Compare les deux hash (le hash original et celui nouvellement généré)
//       // timingSafeEqual est utilisé pour éviter les attaques en comparant les deux valeurs de manière sécurisée
//       return timingSafeEqual(
//         Buffer.from(hashedPassword, "hex"), // Convertit le hash original en buffer (Un buffer en programmation, en particulier en Node.js et dans d'autres langages de bas niveau, est un espace mémoire utilisé pour stocker des données binaires brutes. un buffer contient directement les octets (bytes) des données) pour comparaison
//         hashedPasswordVerify // Le buffer du hash nouvellement généré
//       );
//     } catch (error) {
//       console.error("Erreur lors de la vérification du mot de passe :", error);
//       return false;
//     }
//   }
// }
