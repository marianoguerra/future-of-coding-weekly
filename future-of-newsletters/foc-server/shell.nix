{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/nixos-23.11.tar.gz") {} }:

pkgs.mkShell {
	LOCALE_ARCHIVE_2_27 = if (pkgs.glibcLocales != null) then "${pkgs.glibcLocales}/lib/locale/locale-archive" else "";
	buildInputs = [
		pkgs.glibcLocales
		pkgs.nodejs
		pkgs.vscode-langservers-extracted
		pkgs.nodePackages.eslint
		pkgs.nodePackages.prettier
	];
	shellHook = ''
		export LC_ALL=en_US.UTF-8
		export PATH=$PWD/node_modules/.bin:$PATH
	'';
}
