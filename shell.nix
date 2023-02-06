{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/nixos-22.11.tar.gz") {} }:
with pkgs;

mkShell {
  LOCALE_ARCHIVE_2_27 = "${glibcLocales}/lib/locale/locale-archive";
  buildInputs = [
    glibcLocales
    gnumake
    python310
    python310Packages.pip
    python310Packages.Nikola
    nodejs
    git
    sqlite
  ];
  shellHook = ''
    export LC_ALL=en_US.UTF-8
    npm install
    export PATH=$PWD/node_modules/.bin:$PATH
    export EDITOR=hx
  '';
}
